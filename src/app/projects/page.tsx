'use client'
import { useState } from 'react'
import { TruncateText } from '@/components/utils/utils'
import {
    Checkbox,
    Label,
    Field
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import posts from '../data/projects.json'
import Image from 'next/image'

export default function Projects() {
    const [enabledJS, setEnabledJS] = useState(false)
    const [enabledPy, setEnabledPy] = useState(false)
    const [enabledR, setEnabledR] = useState(false)
    const [enabledSQL, setEnabledSQL] = useState(false)
    const filteredPosts = posts.filter((post) => {
        if (!enabledJS && !enabledPy && !enabledR && !enabledSQL) {
            return true; // Include all posts
        }
        return (
            (enabledJS && post.category.includes('JavaScript')) ||
            (enabledPy && post.category.includes('Python')) ||
            (enabledR && post.category.includes('R')) ||
            (enabledSQL && post.category.includes('SQL'))
        );
    })
    const sortedPosts = filteredPosts.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

    return (
        <main className="container px-16 md:px-44 min-w-full pt-36 pb-52">
            <div className="flex flex-col pb-5">
                <h2 className='text-6xl fancy-header row text-center pb-5'>
                    PROJECTS
                </h2>
                <p className='pb-5 text-lg text-center'>
                    The page includes a collection of public facing projects that I have worked on in Open Source.
                </p>
            </div>
            <div className="flex">
                <div className='flex flex-row py-5 space-x-2'>
                    <div className="basis-2/6 pb-5">
                        <span className='justify-center'>
                            <h2 className='text-left text-2xl regular-header pb-5'>
                                Filters
                            </h2>
                        </span>
                        <div className='space-y-2'>
                            <h3 className='text-left text-lg regular-header'>
                                By Language
                            </h3>
                            <Field className="flex items-center gap-2">
                                <Checkbox
                                    checked={enabledJS}
                                    onChange={setEnabledJS}
                                    className="group size-6 rounded-md bg-[#fffff7] p-1 ring-1 ring-white/15 ring-inset"
                                >
                                    <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                                </Checkbox>
                                <Label>JavaScript</Label>
                            </Field>
                            <Field className="flex items-center gap-2">
                                <Checkbox
                                    checked={enabledPy}
                                    onChange={setEnabledPy}
                                    className="group size-6 rounded-md bg-[#fffff7] p-1 ring-1 ring-white/15 ring-inset"
                                >
                                    <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                                </Checkbox>
                                <Label>Python</Label>
                            </Field>
                            <Field className="flex items-center gap-2">
                                <Checkbox
                                    checked={enabledR}
                                    onChange={setEnabledR}
                                    className="group size-6 rounded-md bg-[#fffff7] p-1 ring-1 ring-white/15 ring-inset"
                                >
                                    <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                                </Checkbox>
                                <Label>R</Label>
                            </Field>
                            <Field className="flex items-center gap-2">
                                <Checkbox
                                    checked={enabledSQL}
                                    onChange={setEnabledSQL}
                                    className="group size-6 rounded-md bg-[#fffff7] p-1 ring-1 ring-white/15 ring-inset"
                                >
                                    <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                                </Checkbox>
                                <Label>SQL</Label>
                            </Field>
                        </div>
                    </div>
                    <div className="flex basis-4/6 pb-5">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <div className="pb-10 space-y-10">
                                {sortedPosts.map((post) => (
                                    <article key={post.id} className="relative isolate flex flex-row  gap-8 border-b border-[#3b3b3b]/5">
                                        <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                            <Image
                                                alt=""
                                                src={post.imageUrl}
                                                className="absolute inset-0 size-max rounded-2xl bg-[#fffff7] object-cover"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                        <div>
                                            <div key={post.id} className="group relative max-w-xl pb-5">
                                                <h3 className="text-2xl font-semibold text-[#3b3b3b] regular-header">
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </h3>
                                                <div className="flex items-center gap-x-4 text-xs my-2">
                                                    <time dateTime={post.datetime} className="text-[#3b3b3b]">
                                                        {post.datetime}
                                                    </time>
                                                    {post.category.map((category) => (
                                                        <p
                                                            className="relative z-10 rounded-full bg-[#fffff7] px-3 py-1.5 font-medium text-[#3b3b3b]" key={category}
                                                        >
                                                            {category}
                                                        </p>
                                                    ))}
                                                </div>
                                                <div className="relative flex items-center gap-x-4 pb-2">
                                                    <div className="text-sm/6">
                                                        <p className="font-semibold text-[#3b3b3b]">
                                                            <a href={post.more.href} className='a-body'>
                                                                <span className="absolute inset-0" />
                                                                {post.more.text} &rarr;
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <TruncateText text={post.description} maxLength={150} />
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}