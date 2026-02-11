import './App.css';
import { getNonRepeatingRandomNoun, getImageForNoun } from './nouns';
import { useState, useEffect, useCallback, useMemo } from 'react';

function App() {
  const [noun, setNoun] = useState({});
  const [germancase, setGermanCase] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswerStatus, setUserAnswerStatus] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [learningMode, setLearningMode] = useState(true);

  const cases = useMemo(()=>(['nominative','accusative','dative','genitive']),[]);

  const newNoun = useCallback(() => {
    setImgUrl('');
    setNoun(prev => getNonRepeatingRandomNoun(prev)); // use prev state
  }, []); // no dependencies

  const updateTestData = useCallback(async () => {
    setImgUrl(await getImageForNoun(noun.noun));
    const randomIndex = Math.floor(Math.random() * cases.length);
    setGermanCase(cases[randomIndex]);
  }, [noun, cases]);

  function handleCheck () {
    console.group("Test");
    console.log("User Answer: ", userAnswer)
    console.log("Correct Answer", correctAnswer)
    console.log(`${germancase}: `, noun[germancase])
    console.groupEnd();
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setUserAnswerStatus("Correct!!")
    } else {
      setUserAnswerStatus("Incorrect!!")
    }
  }

  useEffect(()=>{
    newNoun()
  },[newNoun])

  useEffect(()=>{
    updateTestData()
  },[updateTestData])

  useEffect(()=>{
    setCorrectAnswer(noun[germancase])
    setUserAnswer('')
    setUserAnswerStatus('')
  },[noun, germancase])

  return (
    <main className="antialiased raleway-regular relative">
      <div className="absolute w-[100%] flex justify-center bg-slate-800 p-3 text-lg text-white z-20">
        <h1 className="raleway-bold">German Cases</h1>
      </div>
      <div className="h-screen bg-slate-400 w-[100%] z-10 pt-[10vh]">
        <div className="mx-auto w-[50vh] h-[60vh] bg-slate-800 rounded-lg p-[2.5vh] shadow-md">
          <div className="w-[45vh] h-[55vh] bg-slate-300 rounded-lg p-6">
            <div className="flex justify-center">
              <img src={imgUrl} alt={noun.noun} height={150} width={150} className="rounded-lg"/>
            </div>
            <p className="text-lg text-center raleway-bold">{noun.noun}</p>
            <p className="text-sm text-center">{noun.english}</p>
            {learningMode?(
              <>
                <table className="w-[60%] m-auto my-6">
                  {cases.map(nounCase=>(
                    <tr>
                      <th className="text-left">{nounCase.toUpperCase()}</th>
                      <td>{noun[nounCase]}</td>
                    </tr>
                  ))}
                </table>
                <div className="mt-3 flex justify-center">
                  <input type="submit" className="bg-gray-500 hover:bg-gray-600 rounded-md py-2 px-6 text-white cursor-pointer" value="Next Card" 
                    onClick={()=>{
                      newNoun()
                    }}/>
                </div>
              </>
            ):(
              <>
                <div className="mt-6">
                  <label htmlFor="userAnswer">Enter the correct <strong>{germancase}</strong> form:</label>
                  <input type="text" name="userAnswer" className="border-1 border-solid w-[100%] bg-white rounded-md p-1" value={userAnswer} onChange={(e)=>{setUserAnswer(e.target.value)}}/>
                  <p className={`text-center ${userAnswerStatus==='Correct!!'?'text-green-300':'text-red-500'}`}>{userAnswerStatus}</p>
                  {userAnswerStatus !== '' && (<p className="text-center">Correct Answer: <strong>{correctAnswer}</strong></p>)}
                </div>
                <div className="mt-6 flex justify-center">
                  <input type="submit" className="bg-green-300 hover:bg-green-400 rounded-md py-2 px-6 text-white cursor-pointer" value="Submit" onClick={handleCheck}/>
                </div>
                <div className="mt-3 flex justify-center">
                  <input type="submit" className="bg-gray-500 hover:bg-gray-600 rounded-md py-2 px-6 text-white cursor-pointer" value="Next Card" 
                    onClick={()=>{
                      newNoun()
                    }}/>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="m-3 flex justify-center">
          <button onClick={()=>{
            setLearningMode(!learningMode)
          }}>{learningMode?'Switch to Test Mode':'Switch to Learning Mode'}</button>
        </div>
      </div>
      <div className="absolute bottom-[0] w-[100%] bg-slate-900 text-white text-center">
        German Cases &copy; {(new Date()).getFullYear()}
      </div>
    </main>
  );
}

export default App;
