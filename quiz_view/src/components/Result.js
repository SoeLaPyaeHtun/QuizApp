import React, { useEffect, useState } from "react";
import useStateContext from "../hooks/useStateContext";
import { END_POINT, createAPIendpoint } from "../api";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { getFormatTime } from "../helper/timeFormat";
import { Alert, Zoom } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Result = () => {
  const { context, setContext } = useStateContext();
  const [score, SetScore] = useState(0);
  const [qnAns, SetQnAns] = useState([]);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const ids = context.selectOption.map((x) => x.qId);

    createAPIendpoint(END_POINT.getanswer)
      .post(ids)
      .then((res) => {
        const qna = context.selectOption.map((x) => ({
          ...x,
          ...res.data.find((y) => y.qId === x.qId),
        }));
        console.log("---");
        console.log(qna);
        console.log("---");
        SetQnAns(qna);
        calculateScore(qna);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const calculateScore = (qna) => {
    let tempScore = qna.reduce((acc, curr) => {
      return curr.answer === curr.selected ? acc + 1 : acc;
    }, 0);

    SetScore(tempScore);
    console.log(tempScore);
  };

  const handleSubmitSocre = () => {
    createAPIendpoint(END_POINT.participant)
      .put({
        participantId: context.participantId,
        Score: score,
        timeTaken: context.timeTaken,
      })
      .then((res) => {
        console.log(res);
        setAlert(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex justify-center pt-20">
        <div className="w-2/3 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <FcApproval size={200} />
            <h5 className="text-5xl py-3 font-medium text-gray-900 dark:text-black">
              Congrtulations
            </h5>
            <span className="text-4xl py-7 text-gray-800 dark:text-gray-900">
              Your Score is <span className="text-7xl font-bold">{score}</span>{" "}
              out of 5 in {getFormatTime(context.timeTaken)} mins
            </span>
            <div className="flex mt-4 space-x-6 md:mt-6">
              <a
                onClick={() => {
                  handleSubmitSocre();
                }}
                className="relative inline-block text-lg group mx-10"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Submit Score</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
              <a
                onClick={() => {
                  navigate("/question");
                }}
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Retake Task
                </span>
              </a>
            </div>
            <div className="py-5">
              <Zoom in={alert}>
                <Alert severity="success">Score Upadated</Alert>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div>
        {qnAns.map((i, index) => (
          <div className="w-full flex justify-center" key={index}>
            <Accordion className="w-2/3">
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h5" gutterBottom>Question {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h3" gutterBottom>{i.qnInWord}</Typography>
                <ul>
                    {i.options.map((j,index2) => (
                        <li key={index2}>
                            {
                                i.answer === index2 ?
                                <Alert severity="success">{j}</Alert>:
                                i.answer !== i.selected && index2 === i.selected?
                                <Alert severity="error">{j}</Alert>:
                                <Typography variant="h6">{j}</Typography>
                            }

                        </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
