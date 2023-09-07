import linkIcon from "../../assets/externalLink.png";
import gitHubLogo from "../../assets/gitHubLogo.png";
export default function Project(props) {
  return (
    <div className="text-2xl font-bold border-4 rounded-md bg-slate-200">
      {props.title}
      <img src={props.image} alt="" />
      <div className="flex justify-center center-align">
        <a href="#" className="inline-block">
          <img className="m-0 bg-black border rounded-lg" src={linkIcon} alt="External Link" />
        </a>
        <a href="#" className="inline-block">
          <img className="w-12 m-0" src={gitHubLogo} alt="gitHub Logo" />
        </a>
      </div>
    </div>
  );
}
