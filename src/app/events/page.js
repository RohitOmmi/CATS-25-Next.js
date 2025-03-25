import Header from "@/components/common/Header";
import { getEvents } from "@/lib/getEvents";

export default async function ServicePage() {
  const events = await getEvents(); // Fetch data on the server

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-red-700 ">
          {events.map((each, index) => (
            <div
              className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
              key={index}
            >
              <h2 className="text-xl font-bold">{each.event_name}</h2>
              <p className="text-gray-600">{each.full_description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
