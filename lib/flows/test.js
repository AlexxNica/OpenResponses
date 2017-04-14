import BasePrompt from "../components/modules/base-prompt";
import Heading from "../components/heading";
import LikertChoice from "../components/likert-choice";
import MultipleChoice from "../components/multiple-choice";
import Paragraph from "../components/paragraph";
import RichEditor from "../components/rich-editor";
import TwoUpPrompt from "../components/modules/two-up-prompt";

export default getData => [
  <TwoUpPrompt
    referenceComponent={
      <div>
        <p>
          Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit cupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
        </p>
        <p>
          Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit cupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
        </p>
        <p>
          Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit cupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
        </p>
        <p>
          Fugiat sunt elit elit minim adipisicing. Laborum qui nulla elit scupidatat ea enim exercitation elit duis incididunt elit minim. Esse cillum esse id fugiat ullamco exercitation proident fugiat magna excepteur. Fugiat proident aliqua aliquip ea voluptate in qui fugiat nostrud eiusmod nulla enim. Incididunt voluptate pariatur duis mollit ipsum. Velit irure cillum dolore laborum ullamco adipisicing ut ea eu dolor ullamco culpa. Commodo fugiat labore proident sunt id fugiat consectetur aute eiusmod officia minim.
        </p>
      </div>
    }
  >
    <Heading text="Testing 1, 2, 3!" />
    <Paragraph text="What _what_ $x^2 + 30 = 100$" />
    <LikertChoice
      dataKey="dogChoice"
      leftLabel="not dog"
      rightLabel="very dog"
    />
  </TwoUpPrompt>,

  <BasePrompt>
    <Heading text="Testing 1, 2, 3--the second!" />
    <Paragraph
      text={`Your answer to the Likert prompt was: ${getData(0).dogChoice}`}
    />
    <MultipleChoice
      dataKey="choice"
      choices={[
        "This is a choice",
        "And this is another choice",
        "But this is actually a bee",
      ]}
    />
    <RichEditor dataKey="response" />
  </BasePrompt>,
];
