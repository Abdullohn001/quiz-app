// react router dom import
import { useParams } from "react-router-dom";

// components
import Test from "../components/Test";

// hooks
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/quizzes?title=${title}`);

  useEffect(() => {
    document.title = "Quiz " + title;
  }, [title]);

  return (
    <div className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>Something went wrong</h3>}
      {/* Agar quizzes massiv bo'lsa */}
      {quizzes && quizzes.length > 0 && <Test questions={quizzes[0]} />}
      {/* Agar quizzes data obyekti ichida bo'lsa */}
      {/* {quizzes && quizzes.data && quizzes.data.length > 0 && (
        <Test questions={quizzes.data[0]} />
      )} */}
    </div>
  );
}

export default Quiz;
