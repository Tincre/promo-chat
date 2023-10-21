export type MessagesProps = {
  latestMessages: MessageType[];
};
export type MessageType = {
  message: string;
  role: 'assistant' | 'system' | 'user';
};
export function Messages({ latestMessages }: MessagesProps) {
  return (
    <>
      {latestMessages.map((messagePackage, index) => {
        const { message, role } = messagePackage;
        return role === 'user' ? (
          <div
            key={`user-message-${index}`}
            className="mb-2 text-right"
            id={`user-message-${index}`}
          >
            <p className="inline-block rounded-lg bg-blue-700 px-4 py-2 text-white">
              {message}
            </p>
          </div>
        ) : (
          <div
            key={`assistant-message-${index}`}
            className="mb-2"
            id={`assistant-message-${index}`}
          >
            <p className="inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-700">
              {message}
            </p>
          </div>
        );
      })}
    </>
  );
}
