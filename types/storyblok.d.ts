import {StoryblokStory} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface BlockHeroStoryblok {
  image: AssetStoryblok;
  _uid: string;
  component: "block_hero";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface BlockTextStoryblok {
  text: RichtextStoryblok;
  _uid: string;
  component: "block_text";
  [k: string]: any;
}

export interface PageStoryblok {
  seo: SeoStoryblok[];
  blocks?: (BlockHeroStoryblok | BlockTextStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SeoStoryblok {
  title: string;
  description: string;
  image: AssetStoryblok;
  _uid: string;
  component: "seo";
  [k: string]: any;
}

export interface SettingsStoryblok {
  address?: string;
  _uid: string;
  component: "settings";
  [k: string]: any;
}
