import React from 'react';
import WorkProcessVid from "../../assets/videos/video.mp4";
import "./WorkProcess.css";
import data from '../../constants/data';
import {ControlBar, Player, PlayToggle} from 'video-react';
import 'video-react/dist/video-react.css';

export default function WorkProcess() {
  return (
    <div className="workprocess section__padding">
    <div className="container">
        <div className="workprocess__content text__center">
            <h2 className="section__title text__cap">Our work process</h2>
            <p className="para__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, autem perferendis? Tenetur iusto deserunt itaque nisi fugiat id possimus odio.</p>

            <div className="vid__container">
                <Player autoPlay loop src = {WorkProcessVid}>
                    <ControlBar autoHide = {false} disableDefaultControls = {true}>
                        <PlayToggle />
                    </ControlBar>
                </Player>
            </div>
        </div>
    </div>
</div>
  )
}
