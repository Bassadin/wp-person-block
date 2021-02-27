<?php

/**
 * Plugin Name:     Bastian Personen Block
 * Description:     Simple Person Block
 * Version:         0.1.0
 * Author:          Bastian Hodapp
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     person-block
 *
 * @package         bas-person-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function bas_person_block_person_block_block_init()
{
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "bas-person-block/person-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require($script_asset_path);
	wp_register_script(
		'bas-person-block-person-block-block-editor',
		plugins_url($index_js, __FILE__),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations('bas-person-block-person-block-block-editor', 'person-block');

	$editor_css = 'build/index.css';
	wp_register_style(
		'bas-person-block-person-block-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'bas-person-block-person-block-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	register_block_type(
		'bas-person-block/person-block',
		array(
			'editor_script' => 'bas-person-block-person-block-block-editor',
			'editor_style'  => 'bas-person-block-person-block-block-editor',
			'style'         => 'bas-person-block-person-block-block',
		)
	);
}
add_action('init', 'bas_person_block_person_block_block_init');
