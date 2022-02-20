import { css } from '@emotion/css';
import { getCustomize } from '@/renderer/store';

const args = getCustomize();

export default css`
  width: 100%;
  height: 100%;
  padding: ${args.headNative ? '10px' : '32px'} 10px 10px;
  > .btn {
    width: 100%;
    color: var(--blue);
    text-decoration: underline;
  }
`;
