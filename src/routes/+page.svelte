<script lang="ts">
    import { formatDate } from '$lib/utils';
    import * as config from '$lib/config';

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <p class="date">{formatDate(post.date)}</p>
                <a href={post.slug} class="title">{post.title}</a>
                <p class="description">{post.description}</p>
                <div class="tags">
                    {#each post.categories as category}
                        <span class="surface-4">&num;{category}</span>
                    {/each}
                </div>
            </li>
        {/each}
    </ul>
</section>

<style>
    .posts {
        display: grid;
        gap: 2rem;
    }

    .post {
        max-inline-size: var(--size-content-3);
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--size-7);
    }

    .title {
        font-size: var(--font-size-fluid-3);
        text-transform: capitalize;
    }

    .date {
        color: var(--text-2);
    }

    .description {
        /* margin-top: var(--size-3); */
    }

    .tags {
        display: flex;
        gap: var(--size-3);
        margin-top: var(--size-3);
    }

    .tags > * {
        padding: var(--size-2) var(--size-3);
        border-radius: var(--radius-round);
    }
</style>