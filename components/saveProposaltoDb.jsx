import { useSelector } from "react-redux";
import axios from "axios";
export default function SaveProposaltoDb() {
  let page = useSelector((state) => state.page);
  let aboutYourProject = useSelector((state) => state.aboutYourProject);
  let budget = useSelector((state) => state.budget);
  let cover_letter = useSelector((state) => state.cover_letter);
  let cover_page = useSelector((state) => state.cover_page);
  let pageSequence = useSelector((state) => state.pageSequence);
  let popup = useSelector((state) => state.cover_page);
  let proposedSitemap = useSelector((state) => state.proposedSitemap);
  let proposedSitemap2 = useSelector((state) => state.proposedSitemap2);
  async function submit() {
    let date =
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear();

    await axios.post("/api/proposal", {
      date,
      page,
      aboutYourProject,
      budget,
      cover_letter,
      cover_page,
      pageSequence,
      popup,
      proposedSitemap,
      proposedSitemap2,
    });
  }
  return (
    <>
      <button
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-md px-5 py-2.5 my-5 dark:focus:ring-yellow-900"
        onClick={submit}
      >
        Save Proposal
      </button>
    </>
  );
}
