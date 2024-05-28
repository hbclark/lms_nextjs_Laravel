import SearchVoice from "./SearchVoice";
import VoiceList from "./VoiceList";

const VoicePage = ({ searchParams }) => {
  const query = searchParams?.query || "";
  console.log("query:", query);
  return (
    <div>
      <h1>Search your voice here</h1>
      <SearchVoice />
      <VoiceList query={query} />
    </div>
  );
};

export default VoicePage;
