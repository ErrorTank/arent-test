import { BodyRecord } from "./BodyRecord/BodyRecord";
import { Diary } from "./Diary/Diary";
import { Exercise } from "./Exercise/Exercise";
import { Navigation } from "./Navigation/Navigation";

const MyRecord = () => {
  return (
    <main>
      <Navigation />
      <BodyRecord />
      <Exercise />
      <Diary />
    </main>
  );
};

export default MyRecord;
