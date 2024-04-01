import { twMerge } from 'tailwind-merge';

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full items-center justify-between">
      <nav className="h-full w-[20%] border-r border-plum-50" />

      <section className="container flex h-full flex-col items-center justify-center gap-2 p-2 md:gap-4 md:p-4">
        <ChatList />

        <ChatInput />
      </section>
    </main>
  );
}

const ChatList = () => {
  return (
    <ul className="flex w-full flex-1 flex-col items-start gap-2 overflow-hidden overflow-y-auto border-b border-plum-50 p-2 md:gap-4 md:p-4">
      <ChatMessage message="Hello, how can I help you today?" author="system" />

      <ChatMessage
        message="Hi, tell me more about what I can do here"
        author="user"
      />

      <ChatMessage
        message="Welcome! You can use the following commands to interact with me:
- /experience: Learn about my career experiences.
- /skills: Discover my skills and expertise.
- /projects: Explore the projects I've worked on.
- /contact: Get in touch with me."
        author="system"
      />

      <ChatMessage message="/experience" author="user" />

      <ChatMessage
        message="Sure! I have experience in project management, team leadership, and software development. I'd be happy to provide more details. What specifically would you like to know?"
        author="author"
      />

      <ChatMessage message="/projects" author="user" />

      <ChatMessage
        message="I've worked on various projects, ranging from large-scale software implementations to cross-functional team initiatives. Which type of project are you interested in?"
        author="author"
      />

      <ChatMessage message="/skills" author="user" />

      <ChatMessage
        message="My skills include project management, leadership, communication, problem-solving, and technical expertise in programming languages such as JavaScript, Python, and Java."
        author="author"
      />

      <ChatMessage message="/contact" author="user" />

      <ChatMessage
        message="You can reach out to me via email at example@example.com. I look forward to hearing from you!"
        author="author"
      />
    </ul>
  );
};

type ChatMessageProps = {
  message: string;
  author: string;
};

const ChatMessage = ({ message, author }: ChatMessageProps) => {
  return (
    <li
      className={twMerge(
        'flex w-full',
        author === 'user' ? 'justify-end' : 'justify-start'
      )}
    >
      <div className="flex max-w-[95%] gap-2 md:gap-4">
        <div
          className={twMerge(
            'relative mt-2 flex  min-w-36 flex-col items-start justify-center gap-2 rounded-md bg-plum-700 p-3',
            author === 'user'
              ? 'rounded-tr-none bg-plum-600'
              : 'rounded-tl-none bg-plum-800'
          )}
        >
          <span
            className={twMerge(
              'absolute top-0 text-xs',
              author === 'user' ? '-right-2' : '-left-2'
            )}
          >
            <svg
              viewBox="0 0 8 13"
              height="13"
              width="8"
              className={author === 'user' ? 'fill-plum-600' : 'fill-plum-800'}
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 8 13"
            >
              <title>{author === 'user' ? 'tail-out' : 'tail-in'}</title>
              <path
                opacity="0.13"
                d={
                  author === 'user'
                    ? 'M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z'
                    : 'M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z'
                }
              />
              <path
                d={
                  author === 'user'
                    ? 'M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z'
                    : 'M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z'
                }
              />
            </svg>
          </span>

          <header className="font-fira-sans text-sm text-plum-50">
            {author}
          </header>
          <p className="text-white">{message}</p>
        </div>
      </div>
    </li>
  );
};

const ChatInput = () => {
  return (
    <section className="flex w-full items-center gap-2 md:gap-4">
      <input
        type="text"
        placeholder="Type your message..."
        className="w-full rounded-lg border-2 border-plum-800 p-2 md:p-4"
      />
      <button className="rounded-lg bg-plum-500 p-2 text-white md:p-4">
        Send
      </button>
    </section>
  );
};
