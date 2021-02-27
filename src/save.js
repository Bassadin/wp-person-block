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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes, className }) {
	const blockProps = useBlockProps.save();
	
	return (
		<div {...blockProps}>
			<img src="https://picsum.photos/id/1027/200" />
			<div class="person-info">
				<RichText.Content tagName="h3" value={attributes.personName} />
				<div class="data">
					<Icon icon={check} />  <RichText.Content class="function" tagName="span" value={attributes.funktion} />
					<Icon icon={check} /> <span class="jobs">
						<ul>
							<li>Allgemeine Organisation und
							Öffentlichkeitsarbeit</li>
							<li>Organisation Feste</li>
							<li>Finanzen</li>
						</ul>
					</span>
					<Icon icon={check} /> <span class="tel">07665/51525</span>
					<Icon icon={check} /> <span class="email">norbert.glöckler@bla.de</span>
				</div>
			</div>
		</div>
	);
}
