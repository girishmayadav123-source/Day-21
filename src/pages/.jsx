import "./SupportRequest.css";

function SupportRequest() {
  return (
    <div className="support">

      <div className="form-container">

        <h1>Support Request</h1>

        <p>
          Raise a service ticket and our support team will contact you shortly.
        </p>

        <form>

          <input
            type="text"
            placeholder="Client Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Company Name"
          />

          <input
            type="text"
            placeholder="AMC ID"
          />

          <select>
            <option>Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe your issue..."
          ></textarea>

          <button>Submit Ticket</button>

        </form>

      </div>

    </div>
  );
}

export default SupportRequest;