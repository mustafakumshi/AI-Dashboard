import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  FaDatabase,
  FaTimesCircle,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const FooterTop = () => {
  const { isLoading, isError, insightSummary } = useSelector(
    (state: RootState) => state.aiData
  );

  if (isLoading) {
    return <div className="loading-text">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="error-message">
        Failed to load summary data. Please try again later.
      </div>
    );
  }

  if (insightSummary) {
    const {
      total_queries,
      successful_queries,
      failed_queries,
      average_response_time,
    } = insightSummary;
    return (
      <div className="summary">
        <div className="summary-item">
          <FaDatabase size={18} color="tan"/> {/* Database Icon for Total Queries */}
          <span>Total Queries:</span>
          <strong>{total_queries}</strong>
        </div>
        <div className="summary-item">
          <FaCheckCircle size={18} color="green"/>
          {/* Check Circle Icon for Successful Queries */}
          <span>Successful Queries:</span>
          <strong>{successful_queries}</strong>
        </div>
        <div className="summary-item">
          <FaTimesCircle size={18} color="red"/>
          {/* Times Circle Icon for Failed Queries */}
          <span>Failed Queries:</span>
          <strong>{failed_queries}</strong>
        </div>
        <div className="summary-item">
          <FaClock size={18} color="orange"/> {/* Clock Icon for Average Response Time */}
          <span>Average Response Time:</span>
          <strong>{average_response_time}s</strong>
        </div>
      </div>
    );
  }
};

export default FooterTop;
