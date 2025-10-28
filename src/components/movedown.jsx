import ArrowDownIcon from "@mui/icons-material/ArrowDownward";
import "./movetop.css";

export default function MoveDown() {
    return (
        <button className="scroll-btn" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
                aria-label="Scroll to content">
            <ArrowDownIcon/>
        </button>
    );
}