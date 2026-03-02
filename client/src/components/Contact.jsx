import { useEffect, useState } from "react";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleSend = () => {
    const subject = `Regarding ${listing.name}`;
    const body = `
Hello ${landlord.username},

I am interested in your car: ${listing.name}

Message:
${message}

Listing link:
${window.location.href}
    `;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${landlord.email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-4 mt-4">
          <p>
            Contact{" "}
            <span className="font-semibold">{landlord.username}</span> for{" "}
            <span className="font-semibold">
              {listing.name.toLowerCase()}
            </span>
          </p>

          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={handleSend}
            className="bg-black text-white text-center p-3 uppercase rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </div>
      )}
    </>
  );
}