import { marked } from 'marked';
import DOMPurify from 'dompurify';

const convertToMarkdown = (text: string): string => {
  return DOMPurify.sanitize(marked(text));
};

export default convertToMarkdown;
