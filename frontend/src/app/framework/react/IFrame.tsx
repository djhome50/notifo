/*
 * Notifo.io
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
 */

import * as React from 'react';

export interface IFrameProps {
    html?: string;
}

export const IFrame = (props: IFrameProps) => {
    const { html } = props;

    const [iframe, setIframe] = React.useState<HTMLIFrameElement | null>(null);

    React.useEffect(() => {
        if (iframe && html) {
            const document = iframe.contentDocument;

            if (document) {
                document.open();
                document.write(html || '');
                document.close();
            }
        }
    }, [iframe, html]);

    return (
        <iframe ref={setIframe} />
    );
};
