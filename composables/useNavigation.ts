import { wait } from '@/utilities/helpers'

export default function useNavigation(initial: boolean) {
  const navigationOpen = useState<boolean>('navigationOpen')

  onMounted(() => {
    navigationOpen.value = initial
  })

  const router = useRouter()

  router.afterEach(async (to, from) => {
    if (from.path !== to.path) {
      await wait(250)
    }

    navigationOpen.value = false
  })
}
