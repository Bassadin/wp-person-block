import { TextControl, Placeholder } from '@wordpress/components'
import { Icon, check } from '@wordpress/icons';
import { RichText } from '@wordpress/block-editor';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, className, setAttributes }) {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<img src="https://picsum.photos/id/1027/200" />
			<div class="person-info">
				<RichText
					tagName="h3"
					className="person-name"
					value={attributes.personName}
					onChange={(personName) => setAttributes({ personName })}
					placeholder='Person Name...'
				/>
				<div class="data">
					<Icon icon={check} />
					<RichText
						tagName="span"
						className="function-name"
						value={attributes.funktion}
						onChange={(funktion) => setAttributes({ funktion })}
						placeholder='Funktion...'
					/>
					<Icon icon={check} /> <RichText
						tagName="span"
						className="jobs"
						value={attributes.funktion}
						onChange={(jobs) => setAttributes({ jobs })}
						placeholder='Aufgaben...'
					/>
					<Icon icon={check} /> <RichText
						tagName="span"
						className="telefon-number"
						value={attributes.funktion}
						onChange={(telefon) => setAttributes({ telefon })}
						placeholder='Telefon...'
					/>
					<Icon icon={check} /> <RichText
						tagName="span"
						className="email"
						value={attributes.funktion}
						onChange={(email) => setAttributes({ email })}
						placeholder='E-Mail...'
					/>
				</div>
			</div>
		</div>
	);
}
