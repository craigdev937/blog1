import React from "react";
import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Index() {
    return (
        <Layout>
            <h1>Index page</h1>
            <Link href="/register">
                <a>Register</a>
            </Link>
        </Layout>
    );
};





