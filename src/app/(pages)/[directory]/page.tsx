import DirectoryClient from "@/components/directory-client"
import { DIRECTORIES } from "@/lib/dir";
import { DirInfoSchema } from "@/lib/types/schema";

export function generateStaticParams() {
  return Object.keys(DIRECTORIES).map((directory) => ({
    directory,
  }));
}

export default async function DirectoryPage({ params }: { params: Promise<{ directory: string }>; }) {
  const { directory } = await params
  const dirKey = directory as keyof typeof DIRECTORIES;
  const rawDirInfo = DIRECTORIES[dirKey];

  const parseResult = DirInfoSchema.safeParse(rawDirInfo);

  if (!parseResult.success) {
    // You could also redirect here or show a 404
    return null;
  }

  return <DirectoryClient dirInfo={parseResult.data} />;
}