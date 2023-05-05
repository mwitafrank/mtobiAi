import { useState } from 'react';
import '../App.css';
import { Configuration, OpenAIApi } from 'openai';
import MtobiOptions from './MtobiOptions';
import { arrayItems } from '../MyOptions';
import AiLists from './AiLists';



function Home() {
    const OPENAI_API_KEY = "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";

    // require('dotenv').config()
    // console.log(REACT_APP_)

    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const [option, setOptions] = useState({})
    const selectOptions = (option) => {
        setOptions({ option })
    }

    // console.log(option, "this is the object")
    const [input, setInput] = useState("")

    const giveFeedback = async () => {
        // setOptions({ ...option, prompt: input })

        let object = { ...option, prompt: input }
        console.log("my respones ", object)

        try {

            const response = await openai.createCompletion(object);
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="App">

            {Object.values(option).length === 0 ?
                (
                    <MtobiOptions arrayItems={arrayItems} selectOptions={selectOptions} />

                ) : (
                    <AiLists setInput={setInput} giveFeedback={giveFeedback} arrayItems={arrayItems} />


                )
            }



        </div>
    );
}

export default Home;
