import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { fetcher, QueryKeys } from '../quertClient';
import {
  CREATE_MESSAGE,
  GET_MESSAGES,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
} from '../graphql/message';
// import useInfiniteScroll from '../hooks/useInfiniteScroll';

const MsgList = ({ smsgs, users }) => {
  const client = useQueryClient();

  const { query } = useRouter();
  const userId = query.userId || query.userid || '';

  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  // const [hasNext, setHasNext] = useState(true);
  // const fetchMoreEl = useRef(null);
  // const intersecting = useInfiniteScroll(fetchMoreEl);

  const doneEdit = () => setEditingId(null);

  const { mutate: onCreate } = useMutation(
    ({ text }) => fetcher(CREATE_MESSAGE, { text, userId }),
    {
      onSuccess: ({ createMessage }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          return {
            messages: [createMessage, ...old.messages],
          };
        });
      },
    },
  );

  const { mutate: onUpdate } = useMutation(
    ({ text, id }) => fetcher(UPDATE_MESSAGE, { text, id, userId }),
    {
      onSuccess: ({ updateMessage }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          const targetIndex = old.messages.findIndex(
            (msg) => msg.id === updateMessage.id,
          );
          if (targetIndex < 0) return old;
          const newMsgs = [...old.messages];
          newMsgs.splice(targetIndex, 1, updateMessage);
          return { messages: newMsgs };
        });
        doneEdit();
      },
    },
  );

  const { mutate: onDelete } = useMutation(
    (id) => fetcher(DELETE_MESSAGE, { id, userId }),
    {
      onSuccess: ({ deleteMessage }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          const targetIndex = old.messages.findIndex(
            (msg) => msg.id === deleteMessage,
          );
          if (targetIndex < 0) return old;
          const newMsgs = [...old.messages];
          newMsgs.splice(targetIndex, 1);
          return { messages: newMsgs };
        });
      },
    },
  );

  const { data, error, isError } = useQuery(QueryKeys.MESSAGES, () =>
    fetcher(GET_MESSAGES),
  );

  useEffect(() => {
    if (!data?.messages) return;

    setMsgs(data?.messages || []);
  }, [data?.messages]);

  if (isError) {
    console.log(error);
    return null;
  }

  // useEffect(() => {
  //   if (intersecting && hasNext) {
  //     getMessages();
  //   }
  // }, [intersecting]);

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className='messages'>
        {msgs.map((val) => {
          return (
            <MsgItem
              key={val.id}
              {...val}
              onUpdate={onUpdate}
              startEdit={() => setEditingId(val.id)}
              onDelete={() => onDelete(val.id)}
              isEditing={editingId === val.id}
              myId={userId}
              user={users.find((val) => val.id === userId)}
            />
          );
        })}
      </ul>
      {/* <div ref={fetchMoreEl} /> */}
    </>
  );
};

export default MsgList;
