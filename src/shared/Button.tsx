import { RecipeVariantProps, cva, cx } from '../../styled-system/css'

const buttonStyles = cva({
  base: {
    cursor: 'pointer',
    color: '#fff',
    borderRadius: '4px',
  },
  variants: {
    visual: {
      outline: {
        bg: 'transparent',
        color: '#eee',
      },
      contained: {
        bg: '#005396',
        px: 2,
        py: 1,
      },
    },
  },
  defaultVariants: {
    visual: 'contained',
  },
})

type ButtonVariants = RecipeVariantProps<typeof buttonStyles>

type ButtonProps = {
  children: React.ReactNode
} & ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cx(buttonStyles({ visual: props.visual }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
