import "./chapter-content.scss";
import { IoSettingsOutline } from "react-icons/io5";

const ChapterContent = () => {
  return (
    <>
      <div className="chapter-detail-container">
        <div className="page-in">
          <div className="title">
            <h1 className="headline">
              <a
                className=""
                href="https://www.lightnovelcave.com/novel/the-beginning-after-the-end-web-novel-11110049"
                title="The Beginning After The End (Web Novel)"
              >
                The Beginning After The End (Web Novel)
              </a>
              {/* <span hidden=""> - </span> */}
              <br />
              <span className="chapter-title">Chapter 2</span>
            </h1>

            <button className="control-action-btn" type="button">
              <IoSettingsOutline className="icon" />
            </button>
          </div>

          <div className="chap-details">
            <p>
              I was a king . I could have my country`&apos;`s army assemble at
              my feet, kneeling down with the snap of a finger . I`&apos;`ve
              outdueled my competitors from different countries as well as my
              own people to settle disputes and maintain my position . In terms
              of swordsmanship and controlling ki, I was second to none, for
              having personal strength was essential to becoming a ruler in my
              past world on Earth . Kings weren`&apos;`t born, but raised . Yet,
              I couldn`&apos;`t think of a prouder moment in my two lives than
              now .{" "}
            </p>
            <p>I can crawl baby!</p>
            <p>
              `&apos;`Till now, I had to make do with the stories mother would
              tell me while trying to make me fall asleep . I grumbled out
              noises of complaint when she stopped too early . My father would
              sometimes sit me on his lap while idly talking to me about his old
              days, which gave me some hints as to what kind of world this was
              and what it was filled with .{" "}
            </p>
            <p>
              Reynolds Leywin, former adventurer, (apparently that`&apos;`s a
              viable occupation in this world) had quite a lot of experience in
              this field . He was a part of several parties that went on
              expeditions to search for treasure and fulfill missions they
              acquired from the Adventurer Guild . He eventually settled down
              when he met my mother at the Kingdom`&apos;`s border in a city
              called Valden . He proudly told me how my mother fell head over
              heels for him at first sight when he visited the town`&apos;`s
              Adventurer Guild hall that she had been working at at that time,
              but I suspected it was the exact opposite from how my mother
              slapped him across the back of the head and told him to stop
              telling me lies .{" "}
            </p>
            <p>
              My name was Arthur Leywin now, by the way . Art for short, which,
              as a former King, sounded a little too cute, but hey, after
              getting a glimpse of myself in the metal sheet they used as a
              mirror in the washroom, I looked absolutely adorable . I got my
              mother`&apos;`s glowing auburn hair while my eyes were a bright
              azure color, inherited from my father . I don`&apos;`t know how my
              facial features are going to turn out as I mature, but as long as
              I don`&apos;`t turn out fat, it`&apos;`ll be okay .{" "}
            </p>
            <p>Watch out future ladies! Prepare to be heartbroken!</p>
            <p>
              After weeks of attempting to crawl, yet only achieving an
              uncoordinated scuffle in place, I had finally succeeded; even
              managing to sneak into the family`&apos;`s library/study room
              while my mother was hanging the laundry out to dry . Mother rued
              the day I started to become mobile, sighing, `&apos;`I swear,
              you`&quot;`re going to become as hard to manage as your father .
              `&quot;`
            </p>
          </div>
        </div>

        <div className="chapternav">
          <div className="chapter-control">
            <a
              rel="prev"
              className="button prevchap "
              href="/"
              title="Chapter 1"
            >
              <i className="fa fa-arrow-left"></i>
              <span className="prev">Chap trước</span>
            </a>

            <a
              rel="next"
              className="button nextchap "
              href="/"
              title="Chapter 3"
            >
              <span className="next">Chap sau</span>
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterContent;
