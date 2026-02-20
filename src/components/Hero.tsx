import Image from 'next/image'
import Link from 'next/link'

import { DATA } from '@/common/constants'
import { Client, Profile } from '@/common/types'

import NoData from './NoData'
import SocialLinks from './SocialLinks'
import { Marquee } from './ui/marquee'

import { urlFor } from '@/lib/utils'

const Hero = ({
  profile,
  clients
}: {
  profile: Profile | null
  clients: Client[] | null
}) => {
  const profileImageUrl =
    profile?.avatar && urlFor(profile.avatar)?.width(100).height(100).auto('format').quality(80).url()

  if (!profile) return null

  return (
    <div className="w-full space-y-6 md:space-y-8 text-left">
      <div className="relative h-16 w-16 overflow-hidden rounded-full">
        {profileImageUrl ? (
          <Image
            src={profileImageUrl}
            alt={profile.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>

      <div className="space-y-4">
        <h1 className="font-display text-2xl font-bold tracking-tight text-black">
          Hello, I&apos;m {profile.name} 👋
        </h1>
        <p className="text-justify font-sans text-sm leading-relaxed font-normal text-black/60">
          {profile.description}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`mailto:${profile.email}`}
          className="rounded border border-black/10 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-black/5"
        >
          Contact me
        </Link>
        <SocialLinks socials={DATA.side.socials} />
      </div>

      <div className="space-y-4">
        <p className="text-xs font-semibold tracking-wider text-black/30 uppercase">
          Trusted by Multiple Clients
        </p>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          {clients && clients.length > 0 ? (
            <Marquee className="max-w-full [--duration:8s]">
              {clients.map((client, index) => {
                const clientImageUrl =
                  client.avatar &&
                  urlFor(client.avatar)?.width(100).auto('format').quality(80).url()
                return (
                  <div key={index} className="flex items-center gap-2 pr-8">
                    {clientImageUrl && (
                      <div className="relative aspect-video h-16 overflow-hidden rounded-full">
                        <Image
                          src={clientImageUrl}
                          alt={client.name}
                          fill
                          className="object-cover grayscale"
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </Marquee>
          ) : (
            <NoData message="No Clients Found" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
