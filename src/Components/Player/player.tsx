import "./player.css";
import HeartEmpty from "../../assets/icons/heart.svg";
import Forward from "../../assets/icons/forward.svg";
import Backward from "../../assets/icons/backward.svg";
import Play from "../../assets/icons/play.svg";
import Pause from "../../assets/icons/pause.svg";
import Mute from "../../assets/icons/mute.svg";
import LowVolume from "../../assets/icons/low-volume.svg";
import MidVolume from "../../assets/icons/mid-volume.svg";
import FullVolume from "../../assets/icons/full-volume.svg";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { QueueState } from "../../Atom/atom";
import { container } from "tsyringe";
import { QueueService } from "../../Services/queue.service";
import { jwtDecode } from "jwt-decode";

const Player = () => {
  const [queue, setQueue] = useRecoilState(QueueState);
  const queueService = container.resolve(QueueService);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const data: any = jwtDecode(localStorage.getItem("token") || "");
      setUser(data);

      queueService
        .read(data?._id)
        .then((response) => {
          console.log(response);
          setQueue(response);
        })
        .catch((err) => {
          console.log("EERR ", err);
        });
    }
  }, []);

  return <div className="player-container"></div>;
};

export default Player;
