export type Categories = 'Leetcode' | 'C++' | 'Diary' | 'Rant' | 'LoL' | 'Music'
export type Post = {
    title: string,
    slug: string,
    description: string,
    date: string,
    categories: Categories[]
    published: boolean
}