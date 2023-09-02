import { useState, useEffect } from "react";
import Button from "../components/Button";
import useMyHook from "../hooks/useMyHook";
import Panel from "../components/Panel";

function HookExamplePage({ initialCount }) {

    const {count, increment } = useMyHook(initialCount);
    return (
        <div>
            <Panel className="w-[15rem]">
            <h1>Count: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            </Panel>
        </div>
    )
}

export default HookExamplePage;