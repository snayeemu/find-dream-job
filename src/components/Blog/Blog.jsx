import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>When should you use context API?</h4>
        <p>
          Sometimes, we want to share information between different parts of our
          app, but passing it through lots of different pieces can be confusing
          and messy. Context is like a special box that we can put things in and
          share them with lots of other pieces without having to pass them all
          the way through one by one.
        </p>
      </div>
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>What is a custom hook?</h4>
        <p>
          Sometimes, we need to do the same things in different parts of our
          app, like counting or fetching information from a computer. A custom
          hook is like a magic spell that we can use to do those things easily
          in lots of different places without having to repeat ourselves.
        </p>
      </div>
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>What is useRef?</h4>
        <p>
          In our app, sometimes we need to remember something from before, like
          how many cookies we've eaten or what we were doing before we got
          distracted. useRef is like a special note that we can use to remember
          things between different times we do something without forgetting.
          useRef is a hook in React that returns a mutable ref object which can
          be used to persist values across renders.
        </p>
      </div>
      <div className="bg-secondary text-white p-4 rounded-5 shadow-lg mb-3 border border-5">
        <h4>What is useMemo?</h4>
        <p>
          Sometimes, doing something takes a long time, like cleaning up a
          really messy room or finding a toy in a big pile. In web dev words,
          useMemo is like a special way to save time by remembering how we did
          it before, so we don't have to do it all over again every time.
          useMemo is a hook in React that memoizes the result of a function so
          that it is only recomputed when the dependencies change.
        </p>
      </div>
    </div>
  );
};

export default Blog;
