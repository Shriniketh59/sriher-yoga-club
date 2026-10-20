import type { Photo } from "./images";

/**
 * Gallery of AUTHENTIC club photographs only. Empty until the club supplies
 * photos of its own activities. Put files in /public/images/gallery and add:
 * { id: "orientation-1", photo: { src: "/images/gallery/orientation-1.jpg",
 *   alt: "…", width: 1600, height: 1067, stock: false },
 *   album: "Orientation 2026", caption: "…" }
 * Add dates and captions only when verified.
 */
export type GalleryItem = { id: string; photo: Photo; album: string; caption: string };

export const gallery: GalleryItem[] = [];

export const albums = ["All", ...Array.from(new Set(gallery.map((g) => g.album)))];
