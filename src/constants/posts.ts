import { BlogPost, BlogPostCategory } from "@/types"

export const POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Healing Power of Stories: Finding Hope in Veterinary Practice",
    content:
      "How storytelling became an essential part of my journey as a veterinarian, helping both pets and their families heal.",
    slug: "the-healing-power-of-stories",
    created_at: new Date("2023-01-15"),
    updated_at: new Date("2023-01-15"),
    category: 1,
    category_name: "Veterinary Stories",
    cover_image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "When Words Meet Wounds: Writing Through Veterinary Experiences",
    content:
      "Exploring how my experiences in the veterinary clinic inspire my creative writing and help me process the emotional weight of animal care.",
    slug: "when-words-meet-wounds",
    created_at: new Date("2023-02-10"),
    updated_at: new Date("2023-02-10"),
    category: 2,
    category_name: "Writing Craft",
    cover_image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Emergency Room Chronicles: A Night in Veterinary Emergency",
    content:
      "Real stories from the emergency room where every second counts and every decision can mean the difference between life and death.",
    slug: "emergency-room-chronicles",
    created_at: new Date("2023-03-05"),
    updated_at: new Date("2023-03-05"),
    category: 1,
    category_name: "Veterinary Stories",
    cover_image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "The Art of Medical Writing: Bridging Science and Storytelling",
    content:
      "Tips for aspiring writers who want to incorporate medical accuracy into their animal-related narratives.",
    slug: "the-art-of-medical-writing",
    created_at: new Date("2023-04-12"),
    updated_at: new Date("2023-04-12"),
    category: 2,
    category_name: "Writing Craft",
    cover_image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Understanding Pet Behavior: What Your Animal is Really Telling You",
    content:
      "A veterinarian's guide to reading the subtle signs and behaviors that reveal your pet's health and emotional state.",
    slug: "understanding-pet-behavior",
    created_at: new Date("2023-05-20"),
    updated_at: new Date("2023-05-20"),
    category: 3,
    category_name: "Pet Health",
    cover_image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "The Bond That Heals: Human-Animal Connection in Veterinary Medicine",
    content:
      "Exploring the profound relationships between pets and their owners, and how these bonds influence healing and recovery.",
    slug: "the-bond-that-heals",
    created_at: new Date("2023-06-15"),
    updated_at: new Date("2023-06-15"),
    category: 4,
    category_name: "Reflections",
    cover_image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    title: "Chronic Illness in Pets: Navigating Long-Term Care with Compassion",
    content:
      "Insights into managing chronic illnesses in pets, balancing medical treatment with quality of life considerations.",
    slug: "chronic-illness-in-pets",
    created_at: new Date("2023-07-10"),
    updated_at: new Date("2023-07-10"),
    category: 3,
    category_name: "Pet Health",
    cover_image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
]

export const POST_CATEGORIES: BlogPostCategory[] = [
  { id: 1, name: "Veterinary Stories", slug: "veterinary-stories" },
  { id: 2, name: "Writing Craft", slug: "writing-craft" },
  { id: 3, name: "Pet Health", slug: "pet-health" },
  { id: 4, name: "Reflections", slug: "reflections" },
  { id: 5, name: "Medical Writing", slug: "medical-writing" },
]
