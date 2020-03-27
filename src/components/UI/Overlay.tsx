import React from "react"
import { useSampleStates } from "../../common/SampleStates";
import './UI.css'
/**
 * An overlay to display basic information
 */
export const InfoOverlay = ({ sample }: { sample: any }) => {
    console.log("Sample: %s %s", sample.name, sample.caseNb ? "#" + sample.caseNb : "");

    return (<>
        <div className="overlay" id="info">
            <span >
                {sample.name}
            </span>
        </div>
    </>)
}

/**
 * A dropdown menu to select a sample case (e.g. test case)
 * @param param0 case options + current caseId
 * export sample.caseNb in states
 */
export const CaseSelector = ({ sampleCases, caseId }: { sampleCases: any, caseId: number }) => {
    const setSample = useSampleStates(state => state.setSample);

    console.log("switch to case #" + caseId)

    return (<>
        <div className="overlay" id="caseSelector">
            <select id="testCases" value={caseId} onChange={evt => setSample({ caseNb: evt.target.value })}>
                {Object.keys(sampleCases).map((key) =>
                    <option key={key} value={key}>{sampleCases[key].name}</option>
                )}
            </select>
        </div>
    </>)
}