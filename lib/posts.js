// This file will contain all the functions needed to request Ghost post content, as well as an instance of the Ghost Content API.

import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://back.mauriceetlesautres.com',
  key: '46bab066be3e27e1516ea1be1a',
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePage(pageSlug) {
  return await api.pages
    .read({
      slug: pageSlug
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: "tags"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSpectacles() {
  return await api.posts
    .browse({
      include: "tags",
      filter: "tags:spectacles"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getCompagnie() {
  return await api.posts
    .browse({
      include: "tags",
      filter: "tags:compagnie"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPostsOnTour() {
  return await api.posts
    .browse({
      include: "tags",
      filter: "tags:en-tournee"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPostsOnCreation() {
  return await api.posts
    .browse({
      include: "tags",
      filter: "tags:en-creation"
    })
    .catch(err => {
      console.error(err);
    });
}

