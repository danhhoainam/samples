import React from 'react';
import Link from 'next/link';

const Index = () => (
    <div>
        <Link href="/about">
            <button>Go to About Page</button>
        </Link>

        <p>Index.js</p>
    </div>
);

export default Index;