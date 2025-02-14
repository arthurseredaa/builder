import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ContentScreens } from './collections/ContentScreens'
import { ChoiceScreens } from '@/collections/ChoiceScreens'
import { Funnels } from '@/collections/Funnels'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin:
      process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === 'true'
        ? {
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
            prefillOnly: true,
          }
        : false,
  },
  collections: [ContentScreens, ChoiceScreens, Funnels, Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
    autoPluralization: true,
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
  ],
})
