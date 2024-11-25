"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Title = () => {
  const [name, setName] = useState("sharjeel");
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   console.log('arsalan');

  // })
  // useEffect(()=>{
  //   console.log('arsalan');

  // })
  useEffect(() => {
    console.log("kashan");
  }, []);
  useEffect(() => {
    console.log("kashan update");
  }, [count]);
  const addCounter = () => {
    setCount(count + 1);
  };
  const delCounter = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p className="text-center font-sans bg-foreground text-background">
        arsalan ansari
      </p>
      <p className="text-center font-popins">arsalan ansari</p>
      <p className="text-center font-sans">arsalan ansari</p>
      <p>{name}</p>
      <br />
      <p>{count}</p>
      <br />
      <button onClick={addCounter}>add</button>
      <br />
      <button className="bg-primary" onClick={delCounter}>
        delete
      </button>
      <br />
      <Button variant="outline"> button</Button>
      <div className="w-[1200px] mx-auto">

      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
      </div>
    </div>
  );
};

export default Title;
