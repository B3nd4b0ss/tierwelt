import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./movetop.css";

export default function MoveTop() {
    return (
        <button className="scroll-btn scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                aria-label="Scroll to top">
            <ArrowUpwardIcon/>
        </button>
    );
}