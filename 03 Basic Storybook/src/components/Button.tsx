import { CSSProperties, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
	onClick?: () => void;
	variant: "primary" | "secondary";
	size: "sm" | "md" | "lg";
}>;

export const Button = ({
	children,
	onClick,
	variant = "primary",
	size = "md",
}: ButtonProps) => {
	const variantStyles: Record<ButtonProps["variant"], CSSProperties> = {
		primary: {
			backgroundColor: "blue",
			color: "white",
		},
		secondary: {
			backgroundColor: "gray",
			color: "black",
		},
	};

	const sizeStyles: Record<ButtonProps["size"], CSSProperties> = {
		sm: {
			padding: "0.5rem",
			fontSize: "0.875rem",
		},
		md: {
			padding: "0.75rem",
			fontSize: "1rem",
		},
		lg: {
			padding: "1rem",
			fontSize: "1.25rem",
		},
	};

	return (
		<button
			style={{
				outline: "none",
				border: "none",
				cursor: "pointer",
				borderRadius: 10,
				...variantStyles[variant],
				...sizeStyles[size],
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
};