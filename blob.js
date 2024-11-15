import { put } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function uploadImages() {
    const token = process.env.BLOB_READ_WRITE_TOKEN; // Read token from .env
    if (!token) {
        throw new Error("Missing BLOB_READ_WRITE_TOKEN in environment");
    }

    const imageFolder = path.join(process.cwd(), "public/static/images/carouselImages");
    const imageFiles = [
        "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
        "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg",
        "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"
    ];

    for (const imageFile of imageFiles) {
        const imagePath = path.join(imageFolder, imageFile);
        const fileContent = await fs.readFile(imagePath);

        const { url } = await put(`carouselImages/${imageFile}`, fileContent, {
            access: "public",
            token, // Pass token explicitly
        });

        console.log(`Uploaded ${imageFile}: ${url}`);
    }
}

uploadImages().catch((error) => {
    console.error("Error uploading images:", error);
});
