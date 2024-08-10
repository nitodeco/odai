import { marked } from 'marked';
import { sanitizeHtml } from 'dompurify';

const convertToMarkdown = (text: string): string => {
  return sanitizeHtml(marked(text));
};

export default convertToMarkdown;
