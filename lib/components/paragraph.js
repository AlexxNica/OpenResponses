// @flow
import { StyleSheet, css } from "aphrodite";
import MarkdownIt from "markdown-it";
import MarkdownItKaTeX from "markdown-it-katex";

import sharedStyles from "../styles.js";

const markdownIt = MarkdownIt();
markdownIt.use(MarkdownItKaTeX);

export default (props: { text: string }) => (
  <p
    className={css(styles.paragraph)}
    dangerouslySetInnerHTML={{ __html: markdownIt.renderInline(props.text) }}
  />
);

const styles = StyleSheet.create({
  paragraph: {
    ...sharedStyles.typography.bodyLarge
  }
});
