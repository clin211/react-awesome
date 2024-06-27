/* @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const color = 'white';

function EmotionStyles() {
    return (
        <div
            css={css`
                padding: 32px;
                font-size: 16px;
                background-color: hotpink;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                    color: ${color};
                }
            `}>
            Hover to change color.
        </div>
    );
}

export default EmotionStyles;
