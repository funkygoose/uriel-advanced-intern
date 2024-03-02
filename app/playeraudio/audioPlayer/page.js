import DisplayTrack from "../displayTrack/page";
import Controls from "../controls/page";
import ProgressBar from "../progressBar/page";


const AudioPlayer = () => {
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
};
export default AudioPlayer;