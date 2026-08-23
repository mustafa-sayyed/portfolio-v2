type TitleProps = {
	title: string;
	index: string;
};

function Title({ title, index }: TitleProps) {
	return (
		<div className="flex items-baseline gap-3">
			<span className="font-mono text-xs text-muted-foreground">
				{index}
			</span>
			<h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
				{title}
			</h2>
		</div>
	);
}

export default Title;
